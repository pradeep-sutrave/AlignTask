import { z } from 'zod';

const createtodo= z.object({
    title : z.string().min(1).trim(),
    description : z.string().trim().optional(),
    completed : z.boolean().optional(),
    priority : z.enum(['low','medium','high']).optional(),
    dueDate : z.string().optional(),
    category : z.string().trim().optional(),
});

const updatetodo = createtodo.partial();

const todoValidator={
    createtodo,
    updatetodo,
};

export default todoValidator;