import { Flex } from '@chakra-ui/react';
import React from 'react'
import Loader from "react-loader-spinner";
const Loaders = (timeout) => {
    return (
        <Flex height="78vh" justifyContent="center" alignItems="center">
        <Loader
        type="Rings"
        color="#e6bc2f"
        height={100}
        width={100}
        timeout={timeout} //3 secs
      />
      </Flex>
    )
}

export default Loaders
