import { motion } from "framer-motion";
import { Loader } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import CategoryStore from "../../store/CategoryStore";
import ClientStore from "../../store/ClientStore";
import PortfolioStore from "../../store/PortfolioStore";
import DashboardInput from "./../Input/DashboardInput";

const PortfolioForm = () => {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [portfolioImg1, setPortfolioImg1] = useState("");
  const [portfolioImg2, setPortfolioImg2] = useState("");
  const [category, setCategory] = useState("");
  const [client, setClient] = useState("");
  const [description, setDescription] = useState("");

  const { createPortfolioRequest, isLoading, error } = PortfolioStore();
  const { portfolioCategoryRequest, categoryList } = CategoryStore();
  const { clientListRequest, clientList } = ClientStore();

  useEffect(() => {
    (async () => {
      await portfolioCategoryRequest();
      await clientListRequest();
    })();
  }, []);

  const handlePortfolio = async (e) => {
    e.preventDefault();
    try {
      await createPortfolioRequest(
        title,
        subTitle,
        portfolioImg1,
        portfolioImg2,
        category,
        client,
        description
      );
      toast.success("PortfolioPage Create Successful");
      setTitle("");
      setSubTitle("");
      setPortfolioImg1("");
      setPortfolioImg2("");
      setCategory("");
      setClient("");
      setDescription("");
    } catch (error) {
      toast.error("PortfolioPage Create Failed!");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="contact-form">
        <h1>Add PortfolioPage</h1>
        <form onSubmit={handlePortfolio}>
          <DashboardInput
            label="PortfolioPage Title:"
            type="text"
            placeholder="PortfolioPage Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <DashboardInput
            label="PortfolioPage Sub Title:"
            type="text"
            placeholder="PortfolioPage Sub Title"
            value={subTitle}
            onChange={(e) => setSubTitle(e.target.value)}
            required
          />
          <DashboardInput
            label="PortfolioPage Image 1:"
            type="text"
            placeholder="PortfolioPage Image 2"
            value={portfolioImg1}
            onChange={(e) => setPortfolioImg1(e.target.value)}
            required
          />
          <DashboardInput
            label="PortfolioPage Image 2:"
            type="text"
            placeholder="PortfolioPage Image 2"
            value={portfolioImg2}
            onChange={(e) => setPortfolioImg2(e.target.value)}
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
            <div className="select-wrapper">
              <label className="label">Select Client:</label>
              <select
                className="select"
                value={client}
                onChange={(e) => setClient(e.target.value)}
              >
                <option value="value1" selected>
                  Select
                </option>
                {clientList !== null ? (
                  clientList.map((item, i) => {
                    return (
                      <option key={i} value={item["_id"]}>
                        {item["client_name"]}
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

export default PortfolioForm;
