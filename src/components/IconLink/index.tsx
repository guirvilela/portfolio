import { Container } from "./styles";

interface IconLinkProps {
  image: string;
  alt: string;
  href: string;
}

export function IconLink({ image, alt, href }: IconLinkProps) {
  return (
    <Container>
      <a href={href} target="_blank">
        <img src={image} alt={alt} />
      </a>
    </Container>
  );
}
