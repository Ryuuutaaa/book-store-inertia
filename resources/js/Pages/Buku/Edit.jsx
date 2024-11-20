import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

const Edit = ({ book }) => {
    const { data, setData, put, errors, processing } = useForm({
        title: book.title,
        genre: book.genre,
        author: book.author,
        image: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("buku.update", book.id));
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                    Edit Buku
                </h2>
            }
        >
            <Head title={`Edit Buku - ${book.title}`} />

            <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-md rounded-lg dark:bg-gray-800">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label
                            className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                            htmlFor="title"
                        >
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            value={data.title}
                            onChange={(e) => setData("title", e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                            placeholder="Masukkan judul buku"
                        />
                        {errors.title && (
                            <p className="mt-2 text-sm text-red-500">
                                {errors.title}
                            </p>
                        )}
                    </div>

                    <div>
                        <label
                            className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                            htmlFor="genre"
                        >
                            Genre
                        </label>
                        <input
                            type="text"
                            id="genre"
                            value={data.genre}
                            onChange={(e) => setData("genre", e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                            placeholder="Masukkan genre buku"
                        />
                        {errors.genre && (
                            <p className="mt-2 text-sm text-red-500">
                                {errors.genre}
                            </p>
                        )}
                    </div>

                    <div>
                        <label
                            className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                            htmlFor="author"
                        >
                            Author
                        </label>
                        <input
                            type="text"
                            id="author"
                            value={data.author}
                            onChange={(e) => setData("author", e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                            placeholder="Masukkan nama penulis"
                        />
                        {errors.author && (
                            <p className="mt-2 text-sm text-red-500">
                                {errors.author}
                            </p>
                        )}
                    </div>

                    <div>
                        <label
                            className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                            htmlFor="image"
                        >
                            Image
                        </label>
                        <input
                            type="file"
                            id="image"
                            onChange={(e) =>
                                setData("image", e.target.files[0])
                            }
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                        />
                        {errors.image && (
                            <p className="mt-2 text-sm text-red-500">
                                {errors.image}
                            </p>
                        )}
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            disabled={processing}
                            className={`inline-flex items-center px-6 py-3 text-white text-sm font-medium rounded-lg ${
                                processing
                                    ? "bg-gray-400"
                                    : "bg-indigo-600 hover:bg-indigo-700"
                            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                        >
                            {processing ? "Updating..." : "Update Book"}
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default Edit;
