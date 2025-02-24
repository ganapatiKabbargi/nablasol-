import React from "react";
import styles from "./CreateProject.module.css";

function CreateProject() {
  return (
    <>
      <div>
        <h3>Create a project</h3>
        <form action="" className={styles.formEl}>
          <label htmlFor="">Project name</label> <br />
          <input
            type="text"
            className={styles.projectName}
            placeholder="Enter project name here"
          />
          <label htmlFor="">Client</label>
          <br />
          <input
            type="text"
            list="clients"
            placeholder="Select a client"
            className={styles.selectClient}
          />
          <datalist name="" id="clients">
            <option value="clientA" />
            <option value="clientB" />
            <option value="clientC" />
          </datalist>
          <span className={styles.spanEl}>or</span>
          <input
            type="text"
            className={styles.newClient}
            placeholder="+ New client"
          />
          <label htmlFor="">Dates</label>
          <br />
          <div className={styles.dateElContainer}>
            <input type="date" name="" id="" className={styles.dateEl} />
            <input type="date" name="" id="" className={styles.dateEl} />
          </div>
          <label htmlFor="">Notes</label>
          <br />
          <textarea name="" id="" placeholder="Optional" />
        </form>
      </div>
    </>
  );
}

export default CreateProject;
