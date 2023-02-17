import axios from "axios";

export default axios.create({
    baseURL: "https://639ec2db5eb8889197ec8259.mockapi.io",
    headers: {"Content-type": "application/json"}
});