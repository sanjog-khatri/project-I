/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import HttpStatus from 'http-status-codes'
import { ZodError } from 'zod'

function buildError(error: any) {
    // Validation errors
    if (error instanceof ZodError) {
        return {
            code: HttpStatus.BAD_REQUEST,
            message: HttpStatus.getStatusText(HttpStatus.BAD_REQUEST),
            details: error.issues.map((issue) => issue.message),
        }
    }
// console.log(' got boomed');
    // HTTP errors
    if (error.isBoom) {
        return {
            code: error.output.statusCode,
            message: error.output.payload.message || error.output.payload.error,
        }
    }
    console.log('here?')

    console.log(error)

    // Return INTERNAL_SERVER_ERROR for all other cases
    return {
        code: HttpStatus.INTERNAL_SERVER_ERROR,
        message: HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR),
    }
}

export default buildError