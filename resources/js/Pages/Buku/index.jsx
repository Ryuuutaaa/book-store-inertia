import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";

const Buku = ({ books }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = () => setIsModalOpen(true);
    const handleModalClose = () => setIsModalOpen(false);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Buku
                </h2>
            }
        >
            <Head title="Buku" />

            <a href={route("buku.create")}>
                <button
                    onClick={handleModalOpen}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mx-8 my-10"
                >
                    Tambah Data Buku
                </button>
            </a>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-8 my-5">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Title
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Genre
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Author
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Image
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book) => (
                            <tr
                                key={book.id}
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                            >
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {book.title}
                                </th>
                                <td className="px-6 py-4">{book.genre}</td>
                                <td className="px-6 py-4">{book.author}</td>
                                <td className="px-6 py-4">
                                    <img
                                        src={`${book.image}`}
                                        alt={book.title}
                                        className="w-16 h-16 object-cover"
                                    />
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <a
                                        href={route("buku.show", book.id)}
                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        View
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AuthenticatedLayout>
    );
};

export default Buku;
