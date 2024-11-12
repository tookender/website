"use client";

import React, { useEffect, useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button, Input, Pagination, getKeyValue } from "@nextui-org/react";

interface VocabularyListProps {
    vocabulary: { question: string; answer: string }[];
    deleteVocabulary: (index: number) => void;
    newQuestion: string;
    newAnswer: string;
    setNewQuestion: (question: string) => void;
    setNewAnswer: (answer: string) => void;
    addVocabulary: () => void;
    saveVocabulary: () => void;
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
}) => {
  const [page, setPage] = useState(1);
  
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

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Vocabulary List</h1>
      <Table aria-label="Vocabulary List Table"
        bottomContent={
          <div className="flex w-full justify-center">
            <Pagination
              isCompact
              showControls
              showShadow
              color="secondary"
              page={page}
              total={pages}
              onChange={(page) => setPage(page)}
            />
          </div>
        }       
        classNames={{
          wrapper: "min-h-[222px]",
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
              <TableCell>
                <Button
                  onClick={() => deleteVocabulary(index + (page - 1) * rowsPerPage)}
                  color="danger"
                  size="sm"
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

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
    </>
  );
};
