import { motion } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";
import DashboardInput from "../Input/DashboardInput";
import CategoryStore from "./../../store/CategoryStore";

const CategoryForm = () => {
  const [category, setCategory] = useState("");

  const { createBlogCategory, isLoading, error } = CategoryStore();

  const handleBlogCategory = async (e) => {
    e.preventDefault();
    try {
      await createBlogCategory(category);
      toast.success("Blog Category Create Successful");
      setCategory("");
    } catch (error) {
      toast.error("Blog Category Create Failed!");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="contact-form">
        <h1>Create Blog Category</h1>
        <form onSubmit={handleBlogCategory}>
          <DashboardInput
            label="Client Name:"
            type="text"
            placeholder="Client Name"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
          <div className="field">
            <div className="control text-center mt-4">
              <button className="button is-primary block w-100 hover:from-amber-600 hover:to-amber-400 transition duration-200">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default CategoryForm;
