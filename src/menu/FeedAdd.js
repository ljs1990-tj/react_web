import React, { useEffect, useState } from "react";
import {Container, TextField, Button, Typography, Box, Divider } from "@mui/material";
import { useNavigate, useSearchParams  } from "react-router-dom";

function FeedAdd() {
  const [userId, setUserId] = useState("");
  const [content, setContent] = useState("");
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const navigate = useNavigate();

  useEffect(()=>{
    if(id){
        fetch("http://localhost:3005/feed/"+id)
        .then(res => res.json())
        .then(data => {
            setUserId(data.feed.userId);
            setContent(data.feed.content);
        });
    }
  },[])

  const handleSubmit = () => {
    if (!userId || !content) return alert("모든 항목을 입력해주세요.");

    fetch("http://localhost:3005/feed", {
        method : "POST",
        headers : {
            "Content-type" : "application/json"
        },
        body : JSON.stringify({userId, content})
    })
    .then(res => res.json())
    .then(data => {
        alert("등록 완료");
        navigate("/feedList"); // 원하는 경로
    })
  };

  const handleEdit = () => {
    if (!userId || !content) return alert("모든 항목을 입력해주세요.");

    fetch("http://localhost:3005/feed/"+id, {
        method : "PUT",
        headers : {
            "Content-type" : "application/json"
        },
        body : JSON.stringify({userId, content})
    })
    .then(res => res.json())
    .then(data => {
        alert("수정 완료");
        navigate("/feedList"); // 원하는 경로
    })
  };

   return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>피드 등록</Typography>
      <Divider sx={{ mb: 2 }} />
      <TextField
        label="작성자 ID"
        variant="outlined"
        fullWidth
        margin="normal"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <TextField
        label="내용"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        margin="normal"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Box mt={2}>
        {id ? 
        <Button variant="contained" color="primary" onClick={handleEdit}>수정</Button> : 
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          등록
        </Button>}
        
      </Box>
    </Container>
  )
}

export default FeedAdd