import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  function openInNewTab(url) {
    window.open(url, '_blank').focus();
  }

  return (
    <Col size={12} sm={6} md={4}>
      <div onClick={() => openInNewTab(url)}  className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
        <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      <h4 className="proj-title">{title}</h4>
    </Col>
  )
}
