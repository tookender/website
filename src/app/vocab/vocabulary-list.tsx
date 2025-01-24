"use client";

import React, { useEffect, useState } from "react";
import { FaPen, FaTrashCan } from "react-icons/fa6";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button, Input, Pagination } from "@heroui/react";

interface VocabularyListProps {
    vocabulary: { question: string; answer: string }[];
    deleteVocabulary: (index: number) => void;
    newQuestion: string;
    newAnswer: string;
    setNewQuestion: (question: string) => void;
    setNewAnswer: (answer: string) => void;
    addVocabulary: () => void;
    saveVocabulary: () => void;
    editVocabulary: (index: number, newQuestion: string, newAnswer: string) => void;
}

export const VocabularyList: React.FC<VocabularyListProps> = ({
  vocabulary,
  deleteVocabulary,
  newQuestion,
  newAnswer,
  setNewQuestion,
  setNewAnswer,
  addVocabulary,
  saveVocabulary,
  editVocabulary,
}) => {
  const [page, setPage] = useState(1);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editQuestion, setEditQuestion] = useState("");
  const [editAnswer, setEditAnswer] = useState("");

  const rowsPerPage = 8;
  const pages = Math.ceil(vocabulary.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return vocabulary.slice(start, end);
  }, [page, vocabulary]);
  
  useEffect(() => {
    saveVocabulary();
  })

  const handleEditClick = (index: number) => {
    setEditIndex(index);
    setEditQuestion(vocabulary[index].question);
    setEditAnswer(vocabulary[index].answer);
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    if (editIndex !== null) {
      editVocabulary(editIndex, editQuestion, editAnswer);
      setIsEditing(false);
      setEditIndex(null);
      setEditQuestion("");
      setEditAnswer("");
    }
  };

  return (
    <div className="md:max-w-[600px] md:w-screen">
      <h1 className="text-4xl font-bold mb-6 mt-4">Vocabulary List</h1>
      <Table aria-label="Vocabulary List Table"
        shadow="none"
        bottomContent={
          <div className="flex w-full justify-center">
            <Pagination
              isCompact
              showControls
              color="default"
              page={page}
              total={pages}
              onChange={(page) => setPage(page)}
            />
          </div>
        }       
        classNames={{
          wrapper: "max-w-[700px] min-h-[530px] bg-[#191919] border",
        }}
      >
        <TableHeader>
          <TableColumn>Questions</TableColumn>
          <TableColumn>Solutions</TableColumn>
          <TableColumn>Actions</TableColumn>
        </TableHeader>
        <TableBody emptyContent={"Use the buttons below to add vocabulary"}>
          {items.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.question}</TableCell>
              <TableCell>{item.answer}</TableCell>
              <TableCell className="flex flex-row gap-2">
                <Button
                  onClick={() => handleEditClick(index + (page - 1) * rowsPerPage)}
                  isIconOnly className="text-blue-400" size="sm" title="Edit Vocabulary"
                >
                  <FaPen/>
                </Button>

                <Button
                  onClick={() => deleteVocabulary(index + (page - 1) * rowsPerPage)}
                  isIconOnly className="text-red-400" size="sm" title="Delete Vocabulary"
                >
                  <FaTrashCan/>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {isEditing ? (
        <div className="flex flex-col mt-4 gap-4">
          <div className="flex flex-row gap-4">
            <Input
              type="text"
              value={editQuestion}
              onChange={(e) => setEditQuestion(e.target.value)}
              label="Edit Question"
              size="sm"
            />
            <Input
              type="text"
              value={editAnswer}
              onChange={(e) => setEditAnswer(e.target.value)}
              label="Edit Solution"
              size="sm"
            />
          </div>
          <Button
            id="save"
            onClick={handleSaveEdit}
            color="primary"
          >
            Save
          </Button>
        </div>
      ) : (
        <div className="flex flex-col mt-4 gap-4">
          <div className="flex flex-row gap-4">
            <Input
              type="text"
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
              label="Enter a question"
              size="sm"
            />
            <Input
              type="text"
              value={newAnswer}
              onChange={(e) => setNewAnswer(e.target.value)}
              label="Enter a solution"
              size="sm"
            />
          </div>

          <Button
            id="save"
            onClick={addVocabulary}
            color="primary"
          >
            Add Question & Solution
          </Button>
        </div>
      )}
    </div>
  );
};
