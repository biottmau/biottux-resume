import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const contentHtml = marked(matterResult.content)

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}

// Obtengo solo 3 casos de skills
export async function getHomeSkillData() {

  // muestro solo las 3 primeras
  let skills = [];
  for (let i = 0; i < 3; i++) {
    const fullPath = path.join(postsDirectory, `skill${i + 1}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Use remark to convert markdown into HTML string
    const contentHtml = marked(matterResult.content)
    let val = {
      contentHtml,
      ...matterResult.data
    }
    skills.push(val)
  }
  return skills;
}


// Obtengo todos los exp
export async function getPostByPrefix(prefix) {

  const fileNames = fs.readdirSync(postsDirectory);
  let experiences = [];
  for(let i = 0 ; i < fileNames.length; i++ ){
    if( (fileNames[i]).substring(0, prefix.length) != prefix ) continue;
    const fullPath = path.join(postsDirectory, `${fileNames[i]}`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Use remark to convert markdown into HTML string
    const contentHtml = marked(matterResult.content)
    let val = {
      contentHtml,
      ...matterResult.data
    }
    experiences.push(val);

  }
  // fileNames.map(fileName => {
  //   // Remove ".md" from file name to get id
  //   const id = fileName.replace(/\.md$/, '');
  //   if( id.substring(0,prefix.length) == prefix ){
  //     const fullPath = path.join(postsDirectory, `${i}.md`)
  //     const fileContents = fs.readFileSync(fullPath, 'utf8')
  
  //     // Use gray-matter to parse the post metadata section
  //     const matterResult = matter(fileContents)
  
  //     // Use remark to convert markdown into HTML string
  //     const processedContent = await remark()
  //       .use(html)
  //       .process(matterResult.content)
  //     const contentHtml = processedContent.toString()
  //     let val = {
  //       contentHtml,
  //       ...matterResult.data
  //     }
  //     experiences.push(val);
  
  //   }
  // });

  return experiences;
}

