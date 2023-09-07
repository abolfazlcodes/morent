import { styled } from "styled-components";
import Heading from "./Heading";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const StyledFooter = styled.footer`
  background-color: #fff;
  padding: 5rem;
`;

const StyledFooterContent = styled.section`
  display: flex;
  gap: 2rem;

  @media screen and (max-width: 675px) {
    flex-direction: column;
  }
`;

const StyledLogoWrapper = styled.div`
  width: 20%;

  @media screen and (max-width: 975px) {
    width: 30%;
  }

  @media screen and (max-width: 675px) {
    width: 90%;
  }
`;

const StyledFooterDescription = styled.p`
  color: #1313139e;
  margin: 1rem 0;
`;

const StyledLinksWrapper = styled.div`
  width: 50%;
  margin-left: auto;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  @media screen and (max-width: 975px) {
    width: 70%;
  }

  @media screen and (max-width: 675px) {
    width: 100%;
    justify-content: space-between;
    gap: 2rem;
  }
`;

const StyledListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media screen and (max-width: 675px) {
    gap: 1rem;
  }
`;

const StyledListItem = styled.li`
  margin: 2rem 0;
  text-transform: capitalize;
  color: #1313139e;

  @media screen and (max-width: 675px) {
    font-size: 1.3rem;
    margin: 1rem 0;
  }
`;

const StyledCopyRightsWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 675px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const CopyRightsText = styled.span`
  font-size: 1.6rem;
  color: #1a202c;
  font-weight: 600;

  @media screen and (max-width: 675px) {
    order: 2;
    font-size: 1.4rem;
  }
`;

const StyledCopyRightsList = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media screen and (max-width: 675px) {
    justify-content: space-between;
    gap: 0;
    width: 100%;
  }
`;

const StyledCopyRightsListItem = styled.li`
  font-size: 1.6rem;
  color: #1a202c;
  font-weight: 600;

  @media screen and (max-width: 675px) {
    font-size: 1.3rem;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <StyledFooterContent>
        <StyledLogoWrapper>
          <Logo />
          <StyledFooterDescription>
            Our vision is to provide convenience and help increase your sales
            business.
          </StyledFooterDescription>
        </StyledLogoWrapper>

        <StyledLinksWrapper>
          <StyledListWrapper>
            <Heading as='h2' color='black'>
              about
            </Heading>

            <ul>
              <StyledListItem>How it works</StyledListItem>
              <StyledListItem>Featured</StyledListItem>
              <StyledListItem>partnership</StyledListItem>
              <StyledListItem>business relation</StyledListItem>
            </ul>
          </StyledListWrapper>

          <StyledListWrapper>
            <Heading as='h2' color='black'>
              community
            </Heading>

            <ul>
              <StyledListItem>Events</StyledListItem>
              <StyledListItem>blogs</StyledListItem>
              <StyledListItem>podcast</StyledListItem>
              <StyledListItem>invite a friend</StyledListItem>
            </ul>
          </StyledListWrapper>

          <StyledListWrapper>
            <Heading as='h2' color='black'>
              socials
            </Heading>

            <ul>
              <Link to='/'>
                <StyledListItem>discord</StyledListItem>
              </Link>
              <Link to='/'>
                <StyledListItem>instagram</StyledListItem>
              </Link>
              <Link to='/'>
                <StyledListItem>twitter</StyledListItem>
              </Link>
              <StyledListItem>facebook</StyledListItem>
            </ul>
          </StyledListWrapper>
        </StyledLinksWrapper>
      </StyledFooterContent>

      <hr />

      <StyledCopyRightsWrapper>
        <CopyRightsText>&copy; MORENT. All rights reserved</CopyRightsText>
        <StyledCopyRightsList>
          <StyledCopyRightsListItem>Privacy & Policy</StyledCopyRightsListItem>
          <StyledCopyRightsListItem>Terms & Condition</StyledCopyRightsListItem>
        </StyledCopyRightsList>
      </StyledCopyRightsWrapper>
    </StyledFooter>
  );
}

export default Footer;
