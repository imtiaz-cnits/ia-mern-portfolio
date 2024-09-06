import { motion } from "framer-motion";
import { Loader } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import DashboardInput from "../Input/DashboardInput";
import CategoryStore from "./../../store/CategoryStore";

const PortfolioCategoryForm = () => {
  const [category, setCategory] = useState("");

  const { createPortfolioCategory, isLoading, error } = CategoryStore();

  const handleBlogCategory = async (e) => {
    e.preventDefault();
    try {
      await createPortfolioCategory(category);
      toast.success("Portfolio Category Create Successful");
      setCategory("");
    } catch (error) {
      toast.error("Portfolio Category Create Failed!");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="contact-form">
        <h1>Add Portfolio Category</h1>
        <form onSubmit={handleBlogCategory}>
          <DashboardInput
            label="Category Name:"
            type="text"
            placeholder="Category Name"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
          {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}
          <div className="field">
            <div className="control text-center mt-4">
              <button className="button is-primary block w-100 hover:from-amber-600 hover:to-amber-400 transition duration-200">
                {isLoading ? (
                  <Loader className="w-6 h-6 animate-spin text-center mx-auto" />
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

export default PortfolioCategoryForm;
