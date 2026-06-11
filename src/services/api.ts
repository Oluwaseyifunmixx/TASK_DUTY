import axios from "axios";
import type { Task } from "../types/task";

const API_URL="http://localhost:8090/tasks"

// GET ALL TASKS
export const getAllTasks = async(): Promise<Task[]> =>{
   const response = await axios.get(API_URL)
   return response.data.tasks
}

// GET A SINGLE TASK

export const getASingleTask = async (id: string): Promise<Task> =>{
   const response = await axios.get (`${API_URL}/${id}`)
   return response.data.task
}

// Create A Task

export const CreateTask = async(taskData: Omit<Task, "_id">): Promise<Task> =>{
   const response = await axios.post (API_URL, taskData)
   return response.data.newTask
}

// Update Task

export const updateTask = async(id: string, taskData: Partial<Task>): Promise<Task> =>{
    const response = await axios.put(`${API_URL}/${id}`, taskData)
    return response.data.UpdatedTask
}

// Delete Task
export const deleteTask = async (id: string): Promise<void> =>{
    await axios.delete(`${API_URL}/${id}`)
}