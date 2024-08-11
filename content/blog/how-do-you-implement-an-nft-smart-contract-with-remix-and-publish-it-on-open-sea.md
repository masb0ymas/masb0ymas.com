---
external: false
draft: false
title: "How do you implement an NFT Smart Contract with Remix and publish it on OpenSea?"
description: "In this comprehensive guide, we’ll walk you through the step-by-step process of creating and deploying an NFT smart contract using Remix, a powerful Ethereum IDE. Whether you're new to blockchain development or looking to refine your skills, this tutorial covers everything from setting up your development environment to writing and testing your smart contract code. We’ll also guide you through the deployment process, showing you how to mint and list your NFTs on OpenSea, one of the largest NFT marketplaces. By the end of this guide, you’ll have a fully functional NFT smart contract live on the Ethereum blockchain that is available for purchase on OpenSea."
date: 2024-08-10
tags: ["web3", "solidity", "NFT", "remix"]
---

Previously I have explained about creating a simple NFT smart contract. You can read this blog [Creating a Simple NFT Smart Contract with Solidity and Hardhat](/blog/creating-a-simple-nft-smart-contract-with-solidity-and-hardhat).

This is the `Remix IDE` that we use to create smart contracts and also deploy smart contracts with `Injected Metamask` to the `Sepolia` Testnet. You can access the Remix IDE web here: [https://remix.ethereum.org](https://remix.ethereum.org)

The web looks like this:

![Web Remix IDE](/static/blog/nft-remix/web-remix-eth.webp)

You can generate AI images from the websites below:
- [https://stablediffusionweb.com](https://stablediffusionweb.com)
- [https://rundiffusion.com/](https://rundiffusion.com/)
- [https://www.craiyon.com/](https://www.craiyon.com/)
- [https://www.freepik.com/ai/sketch-to-image](https://www.freepik.com/ai/sketch-to-image)

Once we have created an AI-generated NFT Image, we need to store the image accessible for NFT metadata on the blockchain. Optionally, we can store the NFT image from this website:

- [https://filebase.com/](https://filebase.com/)

For this article we store an NFT to web [`Filebase`](https://filebase.com/)

## Get Faucet Sepolia Testnet

We must have ETH on the Sepolia Testnet Network. To claim the faucet you must have `0.001 ETH` on the Ethereum Mainnet. From this article, I claim the faucet from [https://faucet.quicknode.com/drip](https://faucet.quicknode.com/drip)

![Faucet Sepolia](/static/blog/nft-remix/faucet-sepolia.webp)

## Creating NFT Token

For ease and security, we’ll use the [`OpenZeppelin ERC-721`](https://docs.openzeppelin.com/contracts/5.x/api/token/erc721) contract to create our NFT. With `OpenZeppelin`, we don’t need to write the whole `ERC-721` interface. Instead, we can import the library contract and use its functions.

You can create a file with the name in the `Sunset.sol` contract directory.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts@5.0.0/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts@5.0.0/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts@5.0.0/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts@5.0.0/access/Ownable.sol";

contract SunsetNFT is ERC721, ERC721URIStorage, ERC721Burnable, Ownable {
    constructor(address initialOwner)
        ERC721("The Sunset", "TSS")
        Ownable(initialOwner)
    {}

    function safeMint(address to, uint256 tokenId, string memory uri)
        public
        onlyOwner
    {
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    // The following functions are overrides required by Solidity.
    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
```

Explanation of the code above:

_**Line 1:**_
Specifying SPDX license type as MIT. This indicates that the code is licensed under the MIT License, which is a permissive open-source license allowing the code to be used, modified, and distributed with very few restrictions.

_**Line 2:**_
Declaring the Solidity version as ^0.8.20. This indicates that the code is written using Solidity version 0.8.20 or a compatible version.

_**Line 4-7:**_
Importing necessary contracts from the OpenZeppelin library.

- `ERC721.sol`: This contract is imported from the OpenZeppelin library and represents the basic implementation of the ERC721 standard. ERC721 is the standard for non-fungible tokens (NFTs).
- `ERC721URIStorage.sol`: This contract extends ERC721 and adds functionality for storing and managing metadata URIs associated with NFTs. Metadata URIs typically point to additional information about the NFT.
- `ERC721Burnable.sol`: This contract also extends ERC721 and adds the ability to burn (destroy) NFTs. It provides a function for permanently removing NFTs from circulation, and only the owner can invoke it.
- `Ownable.sol`: This contract is used for access control. It allows you to specify an owner who has special privileges within the contract. The owner can perform certain actions that other users cannot.

_**Line 9:**_
Starting the contract named `SunsetNFT` and mentioning that it extends the ERC721, ERC721URIStorage, and Ownable contracts. This means that the `SunsetNFT` contract inherits the functionality and properties defined in these contracts.

_**Line 10:**_
The constructor function begins here. Constructors are special functions in Solidity that are executed only once during contract deployment. This constructor takes one argument, `initialOwner`, which is an Ethereum address.

_**Line 11:**_
This line calls the constructor of the ERC721 contract with the arguments `The Sunset` and `TSS`. It initializes the NFT contract with a name of `The Sunset` and a symbol of `TSS`.

_**Line 12:**_
This line calls the constructor of the Ownable contract, setting the initial owner of the MyToken contract to the address provided as initialOwner.

_**Line 15:**_
Declaring the function `safeMint` with three arguments: to (the address of the receiver of the NFT token), tokenId (the unique identifier for the token), and uri (the URI of the JSON file associated with the token). This function can only be called by the contract owner (specified by the `onlyOwner` modifier).

_**Line 19:**_
Minting a new token by calling the `_safeMint` function inherited from the ERC721 contract. It creates a new token and assigns it to the specified receiver's address.

_**Line 20:**_
Setting the token URI (metadata URI) associated with the token using the `_setTokenURI` function inherited from the `ERC721URIStorage` contract. The URI is set based on the provided tokenId and uri.

_**Line 25-32:**_
Implementing overrides required by Solidity for the `ERC721` and `ERC721URIStorage` contracts. `tokenURI` is a function that retrieves the metadata URI associated with a given tokenId. It's marked as public and view, indicating that it's a read-only function and can be called by anyone.

_**Line 34-41:**_
Implementing the supportsInterface function, which is required by the `ERC721` and `ERC721URIStorage` contracts. This function checks whether a given interfaceId is supported by the contract and returns a boolean value accordingly.

By combining these functionalities and contracts, the code creates a custom ERC721 token contract named `The Sunset`. This contract allows the contract owner to safely mint new tokens, associate metadata URIs with them, and supports the necessary interfaces defined by the ERC721 standard.

Now, take a minute to customize the smart contract with your own details if you'd like. You can update the token name and symbol by updating the following line - `ERC721("The Sunset", "TSS")`.

When you're finished, compile the smart contract and deploy it using `Injected Provider` (make sure to select Sepolia testnet on Metamask before compiling the contract). Then, paste your wallet address into the box just near the `Deploy` button to define the `initialOwner` parameter of the constructor function. Lastly, click `Deploy` on `Remix IDE`.

![Deploy With Remix](/static/blog/nft-remix/deploy-with-remix.webp)

After deploying the smart contract, we can check the [`Block explorer`](https://sepolia.etherscan.io/tx/0x03b7c59a269d579eefb8dd892b635991829a527549f93b66a48a1ff983b90591) and the [`Contract Address`](https://sepolia.etherscan.io/address/0x68ef1cbfb22906cfac248ea15f01a6b2c6fbc748). We can interact with the contract from the contract address inside.

We can check the functions inside the Smart Contract, such as Name, Symbol, Balance, and many more.

![Check NFT Name](/static/blog/nft-remix/check-nft-name.webp)

## Save to NFT Storage

We need to save the NFT Image to [Filebase](https://filebase.com/). If you don't have an account yet, you'll need to sign up with an email.

![NFT Storage](/static/blog/nft-remix/filebase.webp)

Step-by-Step Upload NFT Image:
- We can use [`Filebase`](https://filebase.com/) for NFT Storage.
- We need to create an account to log in to this website.
- Upload your NFT Image to [`Filebase`](https://filebase.com/) and Get `CID` to use as `NFT Metadata`.
- Write JSON file Metadata and we need to upload the JSON file again to [`Filebase`](https://filebase.com/).
- Copy the `CID URL` to use when minting NFT with `token_uri`.
- After minting, we can access block transactions.
- Finally, we get NFT with Metadata, to check NFT, we can access [`OpenSea Testnet`](https://testnets.opensea.io/assets/sepolia/0x68ef1cbfb22906cfac248ea15f01a6b2c6fbc748/0).

![Filebase Storage](/static/blog/nft-remix/filebase-storage.webp)

## NFT Metadata

NFT metadata is very important for NFT Images and other NFTs. We need to configure metadata with JSON file. For example like this:

```json
{
  "name": "The Sunset Art #0",
  "description": "As the sun sets behind the horizon, casting a golden glow over the water, people gather to surf the calm waves. The beauty of the sunset combined with the thrill of surfing creates an unforgettable experience that he cherishes.",
  "image": "https://ipfs.filebase.io/ipfs/QmZBbictUcbH5GS8GZyPBsdZacwAoefhhhiWjgiPETiZki"
}
```

## Minting NFT with Contract

After uploading the NFT Image, then uploading the NFT Metadata JSON file. We can mint NFT with a Contract.

![Mint NFT](/static/blog/nft-remix/mint-nft.webp)

Confirm the transaction with a Metamask Wallet

![Mint With Metamask](/static/blog/nft-remix/minting-metamask.webp)

We can access the block transactions after minting from the smart contract. [https://sepolia.etherscan.io](https://sepolia.etherscan.io/tx/0xbc36bbd8cec63ccc94a857119b8424a05a95c754c301d3cd21dce3778748151e)

## NFT Collections on OpenSea

Finally we can accessible NFT with OpenSea Testnet, you can check this link: [https://testnets.opensea.io/collection/the-sunset-1](https://testnets.opensea.io/collection/the-sunset-1)

![OpenSea Testnet](/static/blog/nft-remix/opensea-testnet.webp)

## Conclusion

With Remix IDE, we can create Smart Contracts and also Deploy Smart Contracts with the Injected Metamask Wallet. And with [Filebase](https://filebase.com/), we can upload NFT Images to get CID URL for NFT Metadata that can describe NFT.

Thank you very much [Filebase](https://filebase.com/).

## Source
- [https://www.quicknode.com](https://www.quicknode.com/guides/ethereum-development/nfts/how-to-create-and-deploy-an-erc-721-nft)
- [https://rundiffusion.com/](https://rundiffusion.com/)
- [https://filebase.com/](https://filebase.com/)