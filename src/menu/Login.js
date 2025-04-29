import React, { useState } from 'react';
import {
  Container,
  Box,
  Card,
  Typography,
  TextField,
  Button,
  Link,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';

function Login(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');

  const handleLogin = () => {
    if (email === 'test' && password === '1234') {
      setDialogMessage('로그인 성공');
    } else {
      setDialogMessage('로그인 실패');
    }
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };
  return (
    <Container maxWidth="sm">
      <Box mt={10}>
        <Card sx={{ p: 4 }}>
          <Typography variant="h5" textAlign="center" gutterBottom>
            로그인
          </Typography>

          <Box component="form" noValidate autoComplete="off">
            <Stack spacing={3}>
              <TextField
                label="이메일"
                type="text"
                fullWidth
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                label="비밀번호"
                type="password"
                fullWidth
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                variant="contained"
                fullWidth
                size="large"
                onClick={handleLogin}
              >
                로그인
              </Button>
            </Stack>
          </Box>

          <Stack direction="row" justifyContent="space-between" mt={2}>
            <Link href="#" variant="body2">회원가입</Link>
            <Link href="#" variant="body2">비밀번호 찾기</Link>
          </Stack>
        </Card>
      </Box>

      {/* 로그인 결과 다이얼로그 */}
      <Dialog open={dialogOpen} onClose={handleDialogClose} fullWidth maxWidth="sm">
        <DialogTitle>알림</DialogTitle>
        <DialogContent>
          <Typography>{dialogMessage}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>확인</Button>
        </DialogActions>
      </Dialog>
    </Container>
  )
}

export default Login