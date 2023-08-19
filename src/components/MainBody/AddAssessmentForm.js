import styles from "./AssessmentCard.module.css";
import AssessmentFormSkill from "./AssessmentFormSkill";

function AddAssessmentForm({ id, heading, children, onClickHandle }) {
  return (
    <div
      className="modal fade"
      id="modalAddAssessmentForm"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      {/* <form> */}
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Create New Assessment
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput" className="form-label">
                Name of Assessment
              </label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="formGroupExampleInput"
                placeholder="Type Here"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput" className="form-label">
                Purpose of the Assessment
              </label>
              <select
                className="form-select-lg form-control"
                aria-label="Large select example"
                defaultValue={""}
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput" className="form-label">
                Description
              </label>
              <select
                className="form-select-lg form-control"
                defaultValue={""}
                aria-label="Large select example"
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className={`${styles.SkillsInput} mb-3`}>
              <label htmlFor="formGroupExampleInput" className="form-label">
                Skills
              </label>
              <div
                className={`${styles.SkillsList} form-control form-control-lg`}
              >
                <AssessmentFormSkill skill="UI/UX Designer" />
                <AssessmentFormSkill skill="Web Developer" />
                <AssessmentFormSkill skill="Android" />
                <AssessmentFormSkill skill="Web Developer" />
                <AssessmentFormSkill skill="Python" />
              </div>
              <input
                type="text"
                className="form-control form-control-lg"
                id="formGroupExampleInput"
                placeholder="Type Here"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput" className="form-label">
                Duration of Assessment
              </label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="formGroupExampleInput"
                placeholder="HH:MM:SS"
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              style={{ width: "100%" }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      {/* </form> */}
    </div>
  );
}

export default AddAssessmentForm;
