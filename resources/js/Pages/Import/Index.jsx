import React, { useState, useEffect } from "react";
import { Head } from "@inertiajs/react";
import {
    Button,
    Card,
    FileButton,
    Group,
    Progress,
    Stack,
    Text,
    Loader,
    Alert,
} from "@mantine/core";
import { IconUpload, IconInfoCircle } from "@tabler/icons-react";
import MainLayout from "../../Layout/MainLayout";

export default function ImportPage() {
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [importId, setImportId] = useState(null);
    const [status, setStatus] = useState(null);
    const [intervalId, setIntervalId] = useState(null);

    // Polling function for status
    useEffect(() => {
        if (importId) {
            const id = setInterval(async () => {
                const response = await fetch(`/import/status/${importId}`);
                const data = await response.json();
                setStatus(data);

                if (data.status === "completed" || data.status === "failed") {
                    clearInterval(id);
                }
            }, 2000);
            setIntervalId(id);

            return () => clearInterval(id);
        }
    }, [importId]);

    const handleUpload = async () => {
        if (!file) return;

        const formData = new FormData();
        formData.append("file", file);

        setUploading(true);

        try {
            const response = await fetch("/import/upload", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (response.ok) {
                setImportId(data.import_id);
            } else {
                alert(data.message || "Upload failed");
            }
        } catch (error) {
            console.error(error);
            alert("Something went wrong");
        } finally {
            setUploading(false);
        }
    };

    return (
        <MainLayout>
            <Head title="Data Import" />
            <Stack align="center" justify="center" h="100vh" p="md">
                <Card shadow="sm" radius="md" p="lg" withBorder w={500}>
                    <Stack spacing="lg">
                        <Text size="xl" fw={700}>
                            Import Large CSV File
                        </Text>

                        {!importId && (
                            <>
                                <Group>
                                    <FileButton
                                        onChange={setFile}
                                        accept=".csv"
                                    >
                                        {(props) => (
                                            <Button
                                                {...props}
                                                variant="outline"
                                                leftSection={
                                                    <IconUpload size={16} />
                                                }
                                            >
                                                Choose CSV File
                                            </Button>
                                        )}
                                    </FileButton>
                                    {file && <Text size="sm">{file.name}</Text>}
                                </Group>

                                <Button
                                    onClick={handleUpload}
                                    loading={uploading}
                                    disabled={!file}
                                    fullWidth
                                >
                                    Start Import
                                </Button>
                            </>
                        )}

                        {importId && (
                            <Stack spacing="sm">
                                <Text fw={500}>Import Status</Text>
                                <Progress
                                    value={
                                        status && status.total_rows > 0
                                            ? (status.processed_rows /
                                                  status.total_rows) *
                                              100
                                            : status?.status === "completed"
                                            ? 100
                                            : 0
                                    }
                                    striped
                                    animated={status?.status === "processing"}
                                    size="lg"
                                    radius="xl"
                                />

                                <Text size="sm" ta="center">
                                    {status ? (
                                        status.status === "processing" ? (
                                            <>
                                                Processing{" "}
                                                {status.processed_rows} /{" "}
                                                {status.total_rows || "?"}{" "}
                                                rows...
                                            </>
                                        ) : status.status === "completed" ? (
                                            "Import Completed Successfully"
                                        ) : (
                                            "Import Failed"
                                        )
                                    ) : (
                                        <Loader size="sm" />
                                    )}
                                </Text>
                            </Stack>
                        )}

                        {!importId && (
                            <Alert
                                icon={<IconInfoCircle size={16} />}
                                title="Note"
                                color="blue"
                            >
                                Upload CSV files up to 50MB. The import will run
                                in the background, and you can monitor its
                                progress here.
                            </Alert>
                        )}
                    </Stack>
                </Card>
            </Stack>
        </MainLayout>
    );
}
