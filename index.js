function addTodo() {
    const title = document.getElementById("title").value.trim();
    const description = document.getElementById("description").value.trim();
    const dueDate = document.getElementById("due-date").value.trim();
    const assignee = document.getElementById("assignee").value.trim();
    const attachments = document.getElementById("attachment").files.length;

    const formattedDate = dueDate
    ? new Date(dueDate).toISOString().slice(0, 16).replace("T", " ")
    : "No date";

    const card = document.createElement("div");
    card.classList.add("d-flex", "justify-content-between", "align-items-start")

    card.innerHTML = `
    <div>
        <h6 class="fw-bold mb-1">${title || "(No title)"}</h6>
        <p class="text-muted mb-2">${description || "(No description)"}</p>
        <div class="d-flex align-items-center gap-2">
             <small class="text-muted"><i class="bi bi-calendar"></i> Due: ${formattedDate}</small>
             ${
                    assignee !== "-- Select Person (Optional) --"
                        ? `<span class="badge bg-info text-dark"><i class="bi bi-person"></i> ${assignee}</span>`
                        : ""
                }
            ${
                attachments >0 ? `<span class="badge bg-secondary "> ${attachments} attachments</span>`
                        : ""
            }
            </div>
    </div>
    <div class="text-end">
        <small class="text-muted d-block mb-2">Created: ${new Date().toISOString().slice(0, 10)}</small>
        <div class="btn-group">
            <button class="btn btn-outline-success btn-sm"><i class="bi bi-check"></i></button>
            <button class="btn btn-outline-primary btn-sm"><i class="bi bi-pencil"></i></button>
            <button class="btn btn-outline-danger btn-sm"><i class="bi bi-trash"></i></button>
        </div>
    </div>
    `
     document.getElementById("todo-list").prepend(card);

    document.querySelector("form").reset();
}

