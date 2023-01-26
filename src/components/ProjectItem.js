import React, { useEffect, useState } from 'react'
import { Alert, Button } from 'react-bootstrap'
import { Card, Col, Row } from 'react-bootstrap/esm';
import { axiosApi } from '../api/base';
import { PROJECTS } from '../api/endpoints';
import ProjectModal from './Project';

export default function ProjectItem() {
    const [show, setShow] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [activeProject, setActiveProject] = useState(false);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        listProjects()
    }, [])
    
    const toggleModal = () => setShow(!show);

    const addProject = () => {;
        toggleModal()
    }
    const listProjects = async() => {
        const projects = await axiosApi.get(PROJECTS.list)
        setProjects(projects?.data)
    }
    const editProject = (project) => {
      setIsEdit(true)
      setActiveProject(project)
      toggleModal()
    }
    const deleteProject = (id) => {
        axiosApi.delete(PROJECTS.delete(id));
        listProjects()
    }
  return (
    <div className='project'>
    <Alert className='alert  m-2'>Projects</Alert>
        <Button variant="primary mb-3" onClick={addProject}>
        Add Project
      </Button>
      <Row>
      {projects.map((project) =><Col md='4'> <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.prismic.io/smarttask%2F3812b538-da10-4bfb-8406-baf1413c09ef_project+report.gif?auto=compress,format" />
      <Card.Body className='text-center'>
        <Card.Title className='title'>{project.name}</Card.Title>
        <Card.Text>
            '{project.description}'
        </Card.Text>
        <div className='d-flex'>
        <Button variant="primary mr-auto" onClick={() => editProject(project)}>Edit</Button>
        <Button variant="danger ms-auto"  onClick={() => deleteProject(project.id)}>Delete</Button>
        </div>
      </Card.Body>
    </Card>
    </Col>)}
    </Row>

    <ProjectModal show={show} toggleModal={toggleModal} 
    activeProject={activeProject} 
    isEdit={isEdit}
    listProjects={listProjects}
    />
    </div>
  )
}
