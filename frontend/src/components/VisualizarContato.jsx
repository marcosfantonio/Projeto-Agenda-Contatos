import axios from 'axios';
import {Box, Button, IconButton} from '@mui/material';
import SearchIcon from '@mui/icons-material/PersonSearch';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import AddIcon from '@mui/icons-material/PersonAddAlt';
import BlockIcon from '@mui/icons-material/Block';
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';


const VisualizarContato = () => {
    const [contatos, setContatos] = useState([]);
    const navigate = useNavigate();

    const irParaAdicao = () => {
        navigate('/contato/adicionar');
    };

    const irParabusca = () => {
        navigate('/contato/buscar');
    };

    const irParaBloqueados = () => {
        console.log('Yasmin bixa feia');
    };

    const editarContato = (id) => {
        navigate(`/contato/detalhesContato/${id}`);
    };

    useEffect(() => {
        axios.get('http://localhost:8080/contatos/listar')
            .then(response => setContatos(response.data))
            .catch(error => console.error("Erro ao buscar dados:", error));
    }, []);

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
            backgroundColor: '#f5f5f5'
        }}>
            <div style={{
                maxWidth: '1000px',
                width: '80vw',
                padding: '30px',
                backgroundColor: '#fff',
                borderRadius: '20px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                fontFamily: 'roboto',
                display: 'flex',
                flexDirection: 'column',
                height: '80vh'
            }}>
                <h2 style={{
                    textAlign: 'center',
                    fontSize: '24px',
                    fontWeight: '600',
                    color: '#000',
                    marginBottom: '40px',
                }}>
                    Lista de Contatos
                </h2>
                <div style={{
                    flex: 1,
                    overflowY: 'auto',
                    marginBottom: '20px'
                }}>
                    <table style={{
                        borderCollapse: 'separate',
                        padding: '10px',
                        width: '100%',
                    }}>
                        <thead>
                        <tr>
                            <th style={{textAlign: 'center', padding: '10px', borderBottom: '1px solid #ccc'}}>Nome</th>
                            <th style={{
                                textAlign: 'center',
                                padding: '10px',
                                borderBottom: '1px solid #ccc'
                            }}>Telefone
                            </th>
                            <th style={{
                                textAlign: 'center',
                                padding: '10px',
                                borderBottom: '1px solid #ccc'
                            }}>Email
                            </th>
                            <th style={{
                                textAlign: 'center',
                                padding: '10px',
                                borderBottom: '1px solid #ccc'
                            }}>Editar
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {contatos.length === 0 ? (
                            <tr>
                                <td colSpan="4" style={{textAlign: 'center', padding: '20px'}}>
                                    Nenhum contato encontrado.
                                </td>
                            </tr>
                        ) : (
                            contatos.map((contato) => (
                                <tr key={contato.id}>
                                    <td style={{
                                        textAlign: 'center',
                                        padding: '10px',
                                        borderBottom: '1px solid #ccc'
                                    }}>{contato.nome}</td>
                                    <td style={{
                                        textAlign: 'center',
                                        padding: '10px',
                                        borderBottom: '1px solid #ccc'
                                    }}>{contato.telefone}</td>
                                    <td style={{
                                        textAlign: 'center',
                                        padding: '10px',
                                        borderBottom: '1px solid #ccc'
                                    }}>{contato.email}</td>
                                    <td style={{textAlign: 'center', padding: '10px', borderBottom: '1px solid #ccc'}}>
                                        <Button
                                            onClick={() => editarContato(contato.id)}
                                            variant="text"
                                            startIcon={<EditRoundedIcon/>}
                                        />
                                    </td>
                                </tr>
                            ))
                        )}
                        </tbody>
                    </table>
                </div>
                <div style={{
                    padding: '20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                }}>
                    <Button
                        onClick={irParaAdicao}
                        variant="contained"
                        color="primary"
                        fullWidth
                        startIcon={<AddIcon/>}
                        style={{
                            width: '25%',
                            textAlign: 'center',
                            borderRadius: '12px',
                            textTransform: 'none',
                            fontWeight: '600',
                            fontSize: '16px',
                            padding: '10px 0',
                        }}
                    >
                        Adicionar Contato
                    </Button>
                    <Button
                        variant="outlined"
                        color="primary"
                        fullWidth
                        startIcon={<BlockIcon/>}
                        onClick={irParaBloqueados}
                        sx={{
                            width: '25%',
                            textAlign: 'center',
                            borderRadius: '12px',
                            textTransform: 'none',
                            fontWeight: '600',
                            fontSize: '16px',
                            padding: '10px 0',
                            '&:hover': {
                                backgroundColor: '#ccdff4',
                                borderColor: '#005FCC'
                            }
                        }}
                    > Contatos Bloqueados
                    </Button>
                    <Button
                        onClick={irParabusca}
                        variant="contained"
                        color='primary'
                        fullWidth
                        startIcon={<SearchIcon/>}
                        style={{
                            width: '25%',
                            textAlign: 'center',
                            borderRadius: '12px',
                            textTransform: 'none',
                            fontWeight: '600',
                            fontSize: '16px',
                            padding: '10px 0',
                        }}>Buscar Contato</Button>
                </div>
            </div>
        </div>
    );
};

export default VisualizarContato;
