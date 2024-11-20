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
                <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Form Tambah Buku
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Title Input */}
                        <div>
                            <label
                                htmlFor="title"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                            >
                                Judul Buku
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={data.title}
                                onChange={handleChange}
                                placeholder="Masukkan judul buku"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-200"
                            />
                            {errors.title && (
                                <p className="text-red-600 text-sm mt-1">
                                    {errors.title}
                                </p>
                            )}
                        </div>

                        {/* Genre Input */}
                        <div>
                            <label
                                htmlFor="genre"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                            >
                                Genre
                            </label>
                            <input
                                type="text"
                                id="genre"
                                name="genre"
                                value={data.genre}
                                onChange={handleChange}
                                placeholder="Masukkan genre buku"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-200"
                            />
                            {errors.genre && (
                                <p className="text-red-600 text-sm mt-1">
                                    {errors.genre}
                                </p>
                            )}
                        </div>

                        {/* Author Input */}
                        <div>
                            <label
                                htmlFor="author"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                            >
                                Penulis
                            </label>
                            <input
                                type="text"
                                id="author"
                                name="author"
                                value={data.author}
                                onChange={handleChange}
                                placeholder="Masukkan nama penulis"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-200"
                            />
                            {errors.author && (
                                <p className="text-red-600 text-sm mt-1">
                                    {errors.author}
                                </p>
                            )}
                        </div>

                        {/* Image Upload */}
                        <div>
                            <label
                                htmlFor="image"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                            >
                                Gambar Buku
                            </label>
                            <input
                                type="file"
                                id="image"
                                name="image"
                                onChange={handleFileChange}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-200"
                            />
                            {errors.image && (
                                <p className="text-red-600 text-sm mt-1">
                                    {errors.image}
                                </p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                disabled={processing}
                                className={`inline-flex items-center px-6 py-2 rounded-lg font-medium text-sm ${
                                    processing
                                        ? "bg-gray-400 text-gray-700"
                                        : "bg-blue-600 text-white hover:bg-blue-700"
                                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                            >
                                {processing ? "Saving..." : "Simpan Buku"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create;
