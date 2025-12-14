import crypto from "crypto";
import ImageBlock from '../../models/Blockchain.js'
import fs from "fs";



class Block {
    constructor(index, timestamp, data, previousHash = "") {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }

    calculateHash() {
        return crypto
            .createHash("sha256")
            .update(
                this.index +
                this.timestamp +
                JSON.stringify(this.data) +
                this.previousHash
            )
            .digest("hex");
    }
}

class Blockchain {
    async getLatestBlock() {
        return await ImageBlock.findOne().sort({ index: -1 });
    }

    async createGenesisBlock() {
        const exists = await ImageBlock.findOne({ index: 0 });
        if (exists) return exists;

        const genesisBlock = new Block(
            0,
            Date.now(),
            { message: "Genesis Block" },
            "0"
        );

        return await ImageBlock.create(genesisBlock);
    }

    async addBlock(data) {
        let latestBlock = await this.getLatestBlock();

        if (!latestBlock) {
            latestBlock = await this.createGenesisBlock();
        }

        const newBlock = new Block(
            latestBlock.index + 1,
            Date.now(),
            data,
            latestBlock.hash
        );

        await ImageBlock.create(newBlock);
        return newBlock;
    }

    async verifyChain() {
        const blocks = await ImageBlock.find().sort({ index: 1 });

        for (let i = 1; i < blocks.length; i++) {
            const current = blocks[i];
            const previous = blocks[i - 1];

            const recalculatedHash = crypto
                .createHash("sha256")
                .update(
                    current.index +
                    current.timestamp +
                    JSON.stringify(current.data) +
                    current.previousHash
                )
                .digest("hex");

            if (current.hash !== recalculatedHash) return false;
            if (current.previousHash !== previous.hash) return false;
        }

        return true;
    }
}

export const imageBlockchain = new Blockchain();
