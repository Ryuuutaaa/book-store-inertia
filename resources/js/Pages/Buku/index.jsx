import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

const Buku = () => {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Buku
                </h2>
            }
        >
            <Head title="Buku" />
        </AuthenticatedLayout>
    );
};

export default Buku;
