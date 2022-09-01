
import { Router } from 'express';
import userController from './controller/user.js'

const router = Router()

router.get('/users', userController.getAllUsers)

router.post('/user', userController.addUser)

router.patch('/user/:id', userController.UpdateUserByID)

router.delete('/user/:id', userController.DeleteUserByID)

router.get('/user/:id', userController.GetUserByID)

router.get('/usersreversed', userController.getAllUsersReversed)

router.get('/user/search/name', userController.searchByName)

router.get('/user/search/age', userController.searchByAge)

router.get('/user/search/start', userController.getUserStartWith)

router.get('/user/search/end', userController.getUserEndWith)

router.get('/user/search/contain', userController.getUserContain)

router.patch('/user/softdelete/:id', userController.softDeleteUser)

export default router