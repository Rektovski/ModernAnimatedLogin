import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { ChakraProvider } from '@chakra-ui/react'
import Login from "./Login";

export default function App() {
    return (
        <ChakraProvider>
            <div className="App">
                <Login />
            </div>
        </ChakraProvider>
    );
}