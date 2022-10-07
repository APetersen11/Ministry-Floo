USE employee_tracker;

INSERT INTO department (name)
VALUES 
    ('Magical Law Enforcement'),
    ('Regulation and Control of Magical Creatures'),
    ('Magical Accidents and Catastrophes'),
    ('International Magical Co-operation'),
    ('Magical Transportation'),
    ('Magical Games and Sports'),
    ('Mysteries');

INSERT INTO roles (title, salary, department_id)
VALUES
    ('Minister of Magic', 500000, 1),
    ('Head of Department', 300000, 2),
    ('Auror', 250000, 3),
    ('Obliviator', 200000, 4),
    ('Records Officer', 150000, 5),
    ('Special Advisor', 220000, 6);

INSERT INTO employee 
    (id, first_name, last_name, role_id, manager_id)
VALUES
    (1, 'Kingsley', 'Shacklebolt', 1, null),
    (2, 'Ludovic', 'Bagman', 2, 2),
    (3, 'John', 'Dawlish', 3, 1),
    (4, 'Arnold', 'Peasegood', 4, 4),
    (5, 'Arthur', 'Weasley', 5, 3),
    (6, 'Cornelius', 'Fudge', 6, 2);
