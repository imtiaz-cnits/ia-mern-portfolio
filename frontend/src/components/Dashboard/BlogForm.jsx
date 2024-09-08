import {motion} from "framer-motion";
import DashboardInput from "../Input/DashboardInput.jsx";
import {Loader} from "lucide-react";
import {useEffect, useState} from "react";
import BlogStore from "../../store/BlogStore.js";
import {CategoryStore} from "../../store/CategoryStore";
import {toast} from "react-hot-toast";

const BlogForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [blogImg, setBlogImg] = useState("");
    const [category, setCategory] = useState("");

    const { createBlogRequest, isLoading, error } = BlogStore();
    const { blogCategoryRequest, categoryList } = CategoryStore();

    useEffect(() => {
        (async () => {
            await blogCategoryRequest();
        })();
    }, []);

    const handlePortfolio = async (e) => {
        e.preventDefault();
        try {
            await createBlogRequest(
                title,
                description,
                blogImg,
                category,
            );
            toast.success("Blog Create Successful");
            setTitle("");
            setDescription("");
            setCategory("");
            setBlogImg("");
        } catch (error) {
            toast.error("Blog Create Failed!");
        }
    };

    return (
        <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
        >
            <div className="contact-form">
                <h1>Add Blog</h1>
                <form onSubmit={handlePortfolio}>
                    <DashboardInput
                        label="Blog Title:"
                        type="text"
                        placeholder="Blog Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <DashboardInput
                        label="Blog Image:"
                        type="text"
                        placeholder="Blog Image"
                        value={blogImg}
                        onChange={(e) => setBlogImg(e.target.value)}
                        required
                    />
                    <div className="field">
                        <div className="select-wrapper">
                            <label className="label">Select Category:</label>
                            <select
                                className="select"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <option value="value1" selected>
                                    Select
                                </option>
                                {categoryList !== null ? (
                                    categoryList.map((item, i) => {
                                        return (
                                            <option key={i} value={item["_id"]}>
                                                {item["category_name"]}
                                            </option>
                                        );
                                    })
                                ) : (
                                    <option></option>
                                )}
                            </select>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Description:</label>
                        <div className="control">
                          <textarea
                              className="textarea"
                              placeholder="Write Description..."
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                          ></textarea>
                        </div>
                    </div>

                    {/* <div className="field">
            <label className="input input--file">
              <span className="input__text">Attachment:</span>
              <div className="file">
                <div className="upload">
                  <div className="upload-img">
                    <span>file</span>
                  </div>
                </div>
                <div className="file-item">
                  <input
                    type="file"
                    className="input__field"
                    accept="image/*,.doc,.docx,.pdf"
                    required
                  />
                  <span className="input__support">
                    <span className="input__helper"></span>
                  </span>
                </div>
              </div>
            </label>
          </div> */}

                    {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}

                    <div className="field">
                        <div className="control text-center mt-4">
                            <button
                                className="button is-primary block w-100 hover:from-amber-600 hover:to-amber-400 transition duration-200">
                                {isLoading ? (
                                    <Loader className="w-6 h-6 animate-spin text-center mx-auto"/>
                                ) : (
                                    "Submit"
                                )}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </motion.div>
    );
};

export default BlogForm;