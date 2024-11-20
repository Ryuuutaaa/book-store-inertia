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

            <div className="mx-8 my-10">
                <div className="bg-white shadow rounded-lg p-6 dark:bg-gray-800">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {book.title}
                    </h3>
                    <p className="mt-4 text-gray-600 dark:text-gray-400">
                        <strong>Genre:</strong> {book.genre}
                    </p>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                        <strong>Author:</strong> {book.author}
                    </p>
                    <div className="mt-4">
                        <img
                            src={book.image}
                            alt={book.title}
                            className="w-48 h-48 object-cover"
                        />
                    </div>

                    <div className="flex gap-4 mt-6">
                        <a
                            href={route("buku.edit", book.id)}
                            className="text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-yellow-400 dark:hover:bg-yellow-500 focus:outline-none"
                        >
                            Update
                        </a>
                        <button
                            onClick={handleDelete}
                            className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-500 dark:hover:bg-red-600 focus:outline-none"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Show;
