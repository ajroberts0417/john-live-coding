import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

export default function NewPost() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{
    authorId: number
    title: string
    content?: string
  }>()

  const router = useRouter()

  return (
    <>
      <h1 className="text-center font-bold text-lg my-4">New Post</h1>
      <form
        className="flex flex-col gap-4 max-w-lg mx-auto"
        onSubmit={handleSubmit(async data => {
          await fetch('/api/post/new', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json',
            },
          })
          router.push('/')
        })}
      >
        <div className="flex flex-col">
          <label className="font-bold" htmlFor="author">
            Author
          </label>
          <select className="border border-gray-400 rounded-sm" id="author" {...register('authorId')}>
            <option value={1}>Alice</option>
            <option value={2}>Bob</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="font-bold" htmlFor="title">
            Title
          </label>
          <input id="title" className="border border-gray-400 rounded-sm" {...register('title', { required: true })} />
          {errors.title && <p className="text-red-500 font-bold">Title is required.</p>}
        </div>
        <div className="flex flex-col">
          <label className="font-bold" htmlFor="content">
            Content
          </label>
          <textarea id="content" className="border border-gray-400 rounded-sm" rows={3} {...register('content')} />
        </div>
        <button type="submit" className="border border-gray-400 rounded-sm p-2 bg-orange-400 text-white font-bold">
          Submit
        </button>
      </form>
    </>
  )
}
