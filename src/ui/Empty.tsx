import styled from "styled-components";

const EmptyText = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1%.8;
`;

function Empty({ resource }: { resource: string }) {
  return <EmptyText>No {resource} could be found.</EmptyText>;
}

export default Empty;
