import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

interface Comment {
  id: string;
  author: string;
  text: string;
}

interface CommentSectionProps {
  postId: string;
}

export default function CommentSection({ postId }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComments, setNewComments] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);

  const handleAddComment = () => {
    if (newComments.trim() && authorName.trim()) {
      const newCommentObj: Comment = {
        id: new Date().toISOString(),
        author: authorName,
        text: newComments,
      };
      setComments([...comments, newCommentObj]);
      setNewComments("");
      setAuthorName("");
    }
  };

  const handleEditComment = (commentID: string) => {
    const commentToEdit = comments.find((comment) => comment.id === commentID);
    if (commentToEdit) {
      setNewComments(commentToEdit.text);
      setAuthorName(commentToEdit.author);
      setEditingCommentId(commentID);
    }
  };

  const handleSaveEditedComment = () => {
    if (newComments.trim() && authorName.trim() && editingCommentId) {
      const updatedComments = comments.map((comment) =>
        comment.id === editingCommentId
          ? { ...comment, text: newComments, author: authorName }
          : comment
      );
      setComments(updatedComments);
      setNewComments("");
      setAuthorName("");
      setEditingCommentId(null);
    }
  };

  const handleDeleteComment = (commentID: string) => {
    const updatedComments = comments.filter((comment) => comment.id !== commentID);
    setComments(updatedComments);
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold">Comments</h2>
      <div className="mt-4 space-y-4">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <Card key={comment.id}>
              <CardContent className="p-4">
                <div className="font-semibold">{comment.author}</div>
                <p>{comment.text}</p>
                <div className="flex space-x-2 mt-2">
                  <Button
                    onClick={() => handleEditComment(comment.id)}
                    className="text-blue-500"
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => handleDeleteComment(comment.id)}
                    className="text-red-500"
                  >
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-slate-400">No Comments Yet</p>
        )}
      </div>

      <div className="mt-6">
        <Input
          type="text"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          placeholder="Your Name"
          className="w-full mb-2"
        />
        <Input
          type="text"
          value={newComments}
          onChange={(e) => setNewComments(e.target.value)}
          placeholder="Add a Comment"
          className="w-full mb-2"
        />
        <Button
          onClick={
            editingCommentId ? handleSaveEditedComment : handleAddComment
          }
          className="mt-4"
        >
          {editingCommentId ? "Save" : "Submit"}
        </Button>
      </div>
    </div>
  );
}
