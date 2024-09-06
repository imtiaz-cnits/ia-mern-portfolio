import { motion } from "framer-motion";
import { Loader } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import ClientStore from "../../store/ClientStore";
import DashboardInput from "./../Input/DashboardInput";

const ClientForm = () => {
  const [name, setName] = useState("");
  const [clientImage, setClientImage] = useState("");
  const [companyLogo, setCompanyLogo] = useState("");
  const [companyName, setCompanyName] = useState("");

  const { createClient, isLoading, error } = ClientStore();

  const handleClient = async (e) => {
    e.preventDefault();
    try {
      await createClient(name, clientImage, companyLogo, companyName);
      toast.success("Client Create Successful");
      setName("");
      setClientImage("");
      setCompanyLogo("");
      setCompanyName("");
    } catch (error) {
      toast.error("Client Create Failed!");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="contact-form">
        <h1>Add Client</h1>
        <form onSubmit={handleClient}>
          <DashboardInput
            label="Client Name:"
            type="text"
            placeholder="Client Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <DashboardInput
            label="Client Image:"
            type="text"
            placeholder="Client Image"
            value={clientImage}
            onChange={(e) => setClientImage(e.target.value)}
            required
          />
          <DashboardInput
            label="Company Logo:"
            type="text"
            placeholder="Company Logo"
            value={companyLogo}
            onChange={(e) => setCompanyLogo(e.target.value)}
            required
          />
          <DashboardInput
            label="Company Name:"
            type="text"
            placeholder="Company Name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
          {/* <div className="field">
            <div className="select-wrapper">
              <label className="lavel">Select:</label>
              <select className="select">
                <option value="value1">Select</option>
                <option value="value1">Mango</option>
                <option value="value2">Banana</option>
                <option value="value3">Cherries</option>
              </select>
            </div>
          </div>
          <div className="field">
            <label className="label">Message:</label>
            <div className="control">
              <textarea
                className="textarea"
                placeholder="Your Message"
              ></textarea>
            </div>
          </div>

           <div className="field">
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

export default ClientForm;
