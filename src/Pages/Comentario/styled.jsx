import styled from 'styled-components';

export const CommentCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 26px;
  margin-bottom: 20px;
  max-width: 55vw;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const OpinionText = styled.div`
  margin-top: 8px;
`;

export const CommentButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  border: none;
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;
  background-color: #ffff;
  margin-top: 10px;
`;

export const CommentBox = styled.textarea`
  width: 100%;
  height: 60px;
  resize: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  margin-top: 10px;
`;

export const PublishButton = styled.button`
  background-color: #2447F9;
  color: #fff;
  padding: 4px 14px;
  font-size: 12px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  float: right;
`;

export const ComentarImage = styled.img`
  height: 4vh;
  width: 2vw;
`;