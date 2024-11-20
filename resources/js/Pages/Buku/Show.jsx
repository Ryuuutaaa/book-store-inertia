import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

const Show = ({ book }) => {
    const { delete: destroy } = useForm();

    const handleDelete = () => {
        if (confirm("Apakah Anda yakin ingin menghapus buku ini?")) {
            destroy(route("buku.destroy", book.id), {
                preserveScroll: true,
            });
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Detail Buku
                </h2>
            }
        >
            <Head title={`Detail Buku - ${book.title}`} />

            <div className="mx-auto max-w-4xl my-10">
                <div className="bg-white shadow rounded-lg dark:bg-gray-800">
                    {/* Header Section */}
                    <div className="p-6 flex items-center gap-6 border-b border-gray-200 dark:border-gray-700">
                        <div className="flex-shrink-0">
                            <img
                                src={book.image}
                                alt={book.title}
                                className="w-40 h-40 object-cover rounded-lg shadow-md"
                            />
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                                {book.title}
                            </h3>
                            <p className="mt-2 text-gray-600 dark:text-gray-400">
                                <strong>Genre:</strong> {book.genre}
                            </p>
                            <p className="mt-1 text-gray-600 dark:text-gray-400">
                                <strong>Author:</strong> {book.author}
                            </p>
                        </div>
                    </div>

                    {/* Actions Section */}
                    <div className="p-6">
                        <div className="flex justify-end gap-4">
                            <a
                                href={route("buku.edit", book.id)}
                                className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-300 dark:bg-yellow-400 dark:hover:bg-yellow-500"
                            >
                                Update
                            </a>
                            <button
                                onClick={handleDelete}
                                className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Show;
