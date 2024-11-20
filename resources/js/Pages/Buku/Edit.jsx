import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

const Edit = ({ book }) => {
    const { data, setData, put, errors } = useForm({
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
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Edit Buku
                </h2>
            }
        >
            <Head title={`Edit Buku - ${book.title}`} />

            <form onSubmit={handleSubmit} className="mx-8 my-10">
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Title
                    </label>
                    <input
                        type="text"
                        value={data.title}
                        onChange={(e) => setData("title", e.target.value)}
                        className="w-full p-2 border rounded-lg"
                    />
                    {errors.title && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.title}
                        </p>
                    )}
                </div>

                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Genre
                    </label>
                    <input
                        type="text"
                        value={data.genre}
                        onChange={(e) => setData("genre", e.target.value)}
                        className="w-full p-2 border rounded-lg"
                    />
                    {errors.genre && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.genre}
                        </p>
                    )}
                </div>

                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Author
                    </label>
                    <input
                        type="text"
                        value={data.author}
                        onChange={(e) => setData("author", e.target.value)}
                        className="w-full p-2 border rounded-lg"
                    />
                    {errors.author && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.author}
                        </p>
                    )}
                </div>

                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Image
                    </label>
                    <input
                        type="file"
                        onChange={(e) => setData("image", e.target.files[0])}
                        className="w-full p-2 border rounded-lg"
                    />
                    {errors.image && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.image}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg px-5 py-2.5"
                >
                    Update
                </button>
            </form>
        </AuthenticatedLayout>
    );
};

export default Edit;
