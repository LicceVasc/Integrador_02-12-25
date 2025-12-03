
export function errorHandler(error, req, res, next){
    console.log(error)

    const statusCode = error.statusCode || 500
    const message = error.message || "Internal server error"

    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
}