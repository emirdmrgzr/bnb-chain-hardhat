const { expect } = require("chai");
const { ethers } = require("ethers");

describe ("Counter",function (){
    let counter;

    beforeEach(async ()=>{
        const Counter = await ethers.getContractFactory("Counter");
        counter = await Counter.deploy();
        await counter.deployed();
    });

    it("add two numbers correctly", async function(){
        await counter.add(1,2);
        expect(await counter.total()).to.equal(3);
    });

    it("substract two numbers correctly", async function(){
        await counter.substract(2,1);
        expect(await counter.substracted()).to.equal(1);
    });

    it("multiply two numbers correctly", async function(){
        await counter.multiply(4,2);
        expect(await counter.multiplied()).to.equal(8);
    });

    it("divide two numbers correctly", async function(){
        await counter.divide(4,2);
        expect(await counter.divided()).to.equal(2);
    });

    it("divider has to be different from zero", async function(){
        await expect(counter.divide(1,0)).to.be.revertedWith("Division is invalid!");
    });
})