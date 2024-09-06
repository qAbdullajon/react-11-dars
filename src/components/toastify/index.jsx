import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const notify = (title) => toast(title, {
  type: 'error'
});

export default notify