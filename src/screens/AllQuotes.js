import React from "react";
import { deleteData, getData, submitData } from "../services/services";

import "./screens.styles.css";
import { CloseIcon, AddIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  Button,
} from "@chakra-ui/react";

const AllQuotes = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = React.useState([]);
  const [author, setAuthor] = React.useState("");
  const [quote, setQuote] = React.useState("");

  React.useEffect(() => {
    getData(setData);
  }, []);

  const deleteHandler = (id) => {
    deleteData(id, setData);
  };

  const createPost = (e) => {
    e.preventDefault();
    const newQuote = { author, quote };
    submitData(newQuote, setData);
    onClose();
    setAuthor("");
    setQuote("");
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>All Quotes</h2>
      <button className="post" onClick={onOpen}>
        <AddIcon />
      </button>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <div className="quotes__container">
              <h2>{item.author}</h2>
              <p>{item.quote}</p>
              <button
                className="delete__icon"
                onClick={() => {
                  deleteHandler(item.id);
                }}
              >
                <CloseIcon />
              </button>
            </div>
          </div>
        );
      })}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Quote</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={createPost}>
              <label htmlFor="">Author</label>
              <Input
                my={4}
                value={author}
                onChange={(e) => {
                  setAuthor(e.target.value);
                }}
              />
              <label htmlFor="">Quote</label>
              <Input
                my={3}
                value={quote}
                onChange={(e) => {
                  setQuote(e.target.value);
                }}
              />
              <Button
                mx={4}
                onClick={(e) => {
                  onClose();
                }}
              >
                Cancel
              </Button>
              <Button type="submit">Save</Button>
            </form>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default AllQuotes;
