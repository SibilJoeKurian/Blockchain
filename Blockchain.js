const crypto = require("crypto");
class BlockChain {
  //used to store the blockchain
  #chain = [];
  /**
   *create a new block and add it into the block chain
   * @param {*} proof
   * @param {*} previousHash
   * @returns the entire chain
   */
  createBlock(proof, previousHash) {
    let date = new Date();
    let block = {
      index: this.#chain.length,
      timestamp: date.toLocaleTimeString() + " " + date.toLocaleDateString(),
      proof: proof,
      perviousHash: previousHash,
    };
    this.#chain.push(block);
    return this.#chain;
  }
  /**
   * This function is used to get the last block
   * @returns the last block mined
   */
  getPreviousBlock() {
    return this.#chain[this.#chain.length - 1];
  }
  /***
   * Mining algorithm
   */
  proofOfWork() {
    let newProof = 1;
    let previousProof = 2;
    let checkProof = false;
    while (checkProof === false) {
      value = newProof ** 2 - previousProof ** 2;
      console.log(value);
      const hash = crypto
        .createHash("sha256")
        .update(value.toString())
        .digest("hex");
      hash.startsWith("000") ? (checkProof = true) : (newProof += 1);
    }
  }
  /**
   * 
   * @param {*} block : takes a single block 
   * @returns hash of the block given
   */
  hash(block) {
    const hash = crypto
      .createHash("sha256")
      .update(block.toString())
      .digest("hex");
    return hash;
  }
isChainValid(chain){
  let previousBlock=chain[0]
  blockIndex=1;
  while (blockIndex<chain.length)
    previousBlock=1

}
}

b = new BlockChain();
b.createBlock(1, 2);
b.createBlock(1, 2);
let x = b.createBlock(1, 2);
let previous = b.getPreviousBlock();
console.log(x);
console.log(previous);
