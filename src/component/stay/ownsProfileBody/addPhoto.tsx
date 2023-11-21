import AddOProfile from "./addOProfile"

const url = "/upload";

interface ContainerProps {
  children: React.ReactNode
}

// eslint-disable-next-line react-refresh/only-export-components
const Container = ({ children }: ContainerProps) => (
  <div>
    {children}
  </div>
)

export default function uploadOP() {
  return (
    <>

        <Container>
            <AddOProfile
                url={url}
                acceptedFileTypes={[
                    "image/png",
                    "image/jpeg",
                ]}
                maxFileSize={100}
                label="Max File Size: 1MB"
                labelAlt="Accepted File Types: png, jpeg"
            />
        </Container>
        
    </>
  )
}