const crypto=require('crypto')
let obj = {
  index: 2,
  timestamp: "11:08:29 PM 5/9/2021",
  proof: 1,
  previousHash: 2,
};
const hash = crypto.createHash("sha256").update(obj.toString()).digest("hex");
console.log(hash);
