const { ProjectService } = require("./src/services");

const projectService = new ProjectService();

const test = async () => {
  const number = Math.floor(Math.random() * 100);
  const projectName = `Project ${number}`;
  const projectType = `Type ${number}`;
  const memberName = `Member ${number}`;
  const newMemberName = `New Member ${number}`;
  
  await projectService.insertData(projectName, projectType, memberName);
  await projectService.queryDataBy(projectName, projectType);
  await projectService.updateMemberName(projectName, projectType, newMemberName);
  // await projectService.deleteData(projectName, projectType);
};

test();
