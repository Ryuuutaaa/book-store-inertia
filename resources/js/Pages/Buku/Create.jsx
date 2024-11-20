import { Head, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const Create = () => {
    const { data, setData, post, processing, errors } = useForm({
        title: "",
        genre: "",
        author: "",
        image: null,
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleFileChange = (e) => {
        setData("image", e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("buku.store"));
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Tambah Buku
                </h2>
            }
        >
            <Head title="Tambah Buku" />

            <div className="max-w-4xl mx-auto my-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label
                            htmlFor="title"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={data.title}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.title && (
                            <p className="text-red-600 text-sm">
                                {errors.title}
                            </p>
                        )}
                    </div>

                    <div>
                        <label
                            htmlFor="genre"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Genre
                        </label>
                        <input
                            type="text"
                            id="genre"
                            name="genre"
                            value={data.genre}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.genre && (
                            <p className="text-red-600 text-sm">
                                {errors.genre}
                            </p>
                        )}
                    </div>

                    <div>
                        <label
                            htmlFor="author"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Author
                        </label>
                        <input
                            type="text"
                            id="author"
                            name="author"
                            value={data.author}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.author && (
                            <p className="text-red-600 text-sm">
                                {errors.author}
                            </p>
                        )}
                    </div>

                    <div>
                        <label
                            htmlFor="image"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Image
                        </label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            onChange={handleFileChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.image && (
                            <p className="text-red-600 text-sm">
                                {errors.image}
                            </p>
                        )}
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={processing}
                            className="inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            {processing ? "Saving..." : "Save Book"}
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create;
