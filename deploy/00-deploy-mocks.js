const { network } = require("hardhat")
const {
    developmentChains,
    INTIAL_ANSWER,
    DECIMALS,
} = require("../helper-hardhat-config")

module.exports = async (hre) => {
    const { getNamedAccounts, deployments } = hre
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()

    if (developmentChains.includes(network.name)) {
        log("Local network detected! Deploying mocks...")
        await deploy("MockV3Aggregator", {
            contract: "MockV3Aggregator",
            from: deployer,
            log: true,
            args: [DECIMALS, INTIAL_ANSWER],
        })
        log("Mocks deployed!!")
        log(
            "---------------------------------------------------------------------------------------------------------------------"
        )
    }
}

module.exports.tags = ["all", "mocks"]
