import { useState, useRef, useEffect } from "react"
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import DialogSample from './DialogSample'

// InstagramProfile.jsx
import React from 'react';
import { Avatar, Box, Typography, Grid, Tabs, Tab, IconButton } from '@mui/material';
import { Settings } from '@mui/icons-material';

const InstagramProfile = () => {
  const posts = Array.from({ length: 9 });

  return (
    <Box
  sx={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f9f9f9', // 배경색도 추가 가능
  }}
>
  <Box sx={{ maxWidth: 900, width: '100%', padding: 2 }}>
  <Box sx={{ maxWidth: 900, margin: 'auto', padding: 2 }}>
      {/* 프로필 헤더 */}
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={4}>
          <Avatar
            src="https://via.placeholder.com/150"
            alt="Profile"
            sx={{ width: 100, height: 100 }}
          />
        </Grid>
        <Grid item xs={8}>
          <Box display="flex" alignItems="center" gap={2}>
            <Typography variant="h6">username</Typography>
            <Button variant="outlined" size="small">프로필 편집</Button>
            <IconButton><Settings /></IconButton>
          </Box>
          <Box display="flex" gap={3} mt={2}>
            <Typography><strong>12</strong> 게시물</Typography>
            <Typography><strong>300</strong> 팔로워</Typography>
            <Typography><strong>180</strong> 팔로잉</Typography>
          </Box>
          <Box mt={1}>
            <Typography variant="body2"><strong>사용자 이름</strong></Typography>
            <Typography variant="body2">자기소개 텍스트를 여기에 적으세요.</Typography>
          </Box>
        </Grid>
      </Grid>

      {/* 하이라이트 (스토리 썸네일) */}
      <Box display="flex" gap={2} mt={4} overflow="auto">
        {[...Array(5)].map((_, idx) => (
          <Box key={idx} textAlign="center">
            <Avatar
              sx={{ width: 60, height: 60, margin: 'auto' }}
              src={`https://via.placeholder.com/100?text=${idx + 1}`}
            />
            <Typography variant="caption">하이라이트</Typography>
          </Box>
        ))}
      </Box>

      {/* 탭 */}
      <Box mt={4}>
        <Tabs value={0} centered>
          <Tab label="게시물" />
          <Tab label="릴스" />
          <Tab label="태그됨" />
        </Tabs>
      </Box>

      {/* 게시물 그리드 */}
      <Grid container spacing={1} mt={1}>
        {posts.map((_, idx) => (
          <Grid item xs={4} key={idx}>
            <Box
              component="img"
              src={`https://via.placeholder.com/300?text=Post+${idx + 1}`}
              alt={`post-${idx}`}
              sx={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover' }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  </Box>
</Box>


   
  );
};
function Ref(){
    // let [numState, setNum] = useState(1);
    // let numVar = 1;
    // let numRef = useRef(1);

    // let [value, setValue] = useState("");
    // let inputRef = useRef();

    // useEffect(()=>{
    //     inputRef.current.focus();
    //     // console.log(inputRef);
    // }, [])
    return (
        <>
        <InstagramProfile></InstagramProfile>
            {/* <DialogSample></DialogSample>
            <hr></hr>
            <div>{numState} <button onClick={()=> setNum(numState + 1)}>state 증가</button></div>
            <div>{numVar} <button onClick={()=>{
                numVar += 1;
                console.log("var ==> ", numVar);
            }}>var 증가</button></div>
            <div>{numRef.current} <button onClick={()=>{
                numRef.current += 1;
                console.log("ref ==> ", numRef.current);
            }}>ref 증가</button></div>

            <input ref={inputRef} value={value} onChange={(e)=>{setValue(e.target.value)}}></input>
            <Button variant="contained" size="small" endIcon={<SendIcon />} onClick={()=>{
                setNum(numState + Number(value));
                setValue("");
                inputRef.current.focus();
            }}>추가</Button> */}
        </>
    )
}

export default Ref