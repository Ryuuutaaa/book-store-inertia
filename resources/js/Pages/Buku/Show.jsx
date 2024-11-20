import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

const Show = ({ book }) => {
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
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Show;
